package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"time"
)

func main() {
	data := getAnswerJSON()
	start := time.Now()
	for _, item := range data {
		attempt := flip(item[0])
		if attempt != item[1] {
			panic(fmt.Errorf("wrong answer for \"%s\". \"%s\" != \"%s\"", item[0], attempt, item[1]))
		}
	}
	fmt.Printf("Correctly answered all items in %v seconds\n", time.Since(start))
}

func flip(input string) string {
	var output string
	for _, l := range input {
		l = getNewCharacter(l)
		output = output + string(l)
	}
	return output
}
func getNewCharacter(input int32) int32 {
	if input >= 65 && input <= 90 {
		// an uppercase letter
		return 122 - (input - 65)  // use 122 here to convert to lowercase
	} else if input >= 97 && input <= 122 {
		// a lowercase letter
		return 122 - (input - 97)
	}
	return input
}
func openFile() *os.File {
	jsonFile, err := os.Open("02_flip_cypher/submissions/answers.json")
	if err != nil {
		panic(err)
	}
	return jsonFile
}

func closeFile(file *os.File) {
	if err := file.Close(); err != nil {
		panic(err)
	}
}

func getAnswerJSON() [][]string {
	jsonFile := openFile()
	defer closeFile(jsonFile)
	byteValue, err := ioutil.ReadAll(jsonFile)
	if err != nil {
		panic(err)
	}
	var data [][]string
	if err = json.Unmarshal(byteValue, &data); err != nil {
		panic(err)
	}
	return data
}