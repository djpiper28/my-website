package main

import (
	"crypto"
	_ "crypto/sha256"
	"encoding/hex"
	"errors"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"strconv"
	"strings"
)

const (
	OutputFile = "meta.ts"
)

type FileData struct {
	Alias          string
	RelativeUrl    string
	MetaImportPath string
	Year           int64
	Month          int64
}

func parseFileName(path string) (FileData, error) {
	dir, _ := filepath.Split(path)

	hasher := crypto.SHA256.New()
	_, err := hasher.Write([]byte(path))
	if err != nil {
		return FileData{}, err
	}

	sha := hex.EncodeToString(hasher.Sum(nil))
	ret := FileData{
		RelativeUrl:    fmt.Sprintf("/blog/%s", dir[3:]),
		MetaImportPath: fmt.Sprintf("%s/meta.tsx", dir),
		Alias:          fmt.Sprintf("meta_%s", sha),
	}

	parts := strings.Split(dir, "/")
	if len(parts) != 5 {
		return FileData{}, fmt.Errorf("Wrong amount of path parts, expected ../yyyy/mm/title (4), found %d", len(parts))
	}

	ret.Year, err = strconv.ParseInt(parts[1], 10, 64)
	if err != nil {
		return FileData{}, err
	}

	ret.Month, err = strconv.ParseInt(parts[2], 10, 64)
	if err != nil {
		return FileData{}, err
	}

	return ret, nil
}

var metaDatas []FileData = []FileData{}

func visitFiles(path string, di fs.DirEntry, err error) error {
	if !strings.HasSuffix(path, "page.tsx") {
		return nil
	}

	if path == "../page.tsx" {
		return nil
	}

	metaData, err := parseFileName(path)
	if err != nil {
		return errors.Join(fmt.Errorf("Cannot parse blog page filename %s, it should be in form ../yyyy/mm/title/page.tsx", path), err)
	}

	log.Printf("Found page: %s - %+v", path, metaData)
	metaDatas = append(metaDatas, metaData)
	return nil
}

func main() {
	log.Printf("Starting code generation for blog index...")
	err := filepath.WalkDir("..", visitFiles)
	if err != nil {
		log.Fatalf("Cannot start server: %s", err)
	}

	output := `// AUTO GENERATED - DO NOT MODIFY BY HAND
import { type BlogMeta } from '../meta.ts';

`

	for _, metaData := range metaDatas {
		output += fmt.Sprintf("import { meta as %s } from '%s';", metaData.Alias, metaData.MetaImportPath)
	}

	output += `

type BlogMetaWithUrl = BlogMeta & {
    url: string;
};

export const allBlogs: BlogMetaWithUrl[] = [
`

	for _, metaData := range metaDatas {
    output += fmt.Sprintf("    {url: '%s', ...%s},\n", metaData.RelativeUrl, metaData.Alias)
	}
	output += "];\n"

	err = os.WriteFile(OutputFile, []byte(output), 0777)
	if err != nil {
		log.Fatalf("Cannot save output of the meta file for the blob: %s", err)
	}
}
