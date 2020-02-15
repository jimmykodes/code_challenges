package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

func main() {
	data := getAnswerJSON()
	for _, item := range data {
		attempt := persistence(item[0], 0)
		if attempt != item[1] {
			panic(fmt.Errorf("wrong answer for %d. %d != %d", item[0], attempt, item[1]))
		}
	}
	fmt.Println("Correctly answered all items")
}

func persistence(number int, tries int) int {
	if number < 10 {
		return tries
	} else {
		product := 1
		tries ++
		for number > 0 {
			digit := number % 10
			product *= digit
			number /= 10
		}
		return persistence(product, tries)
	}
}

func getAnswerJSON() [][]int {
	jsonFile, err := os.Open("01_persistence/submissions/answers.json")
	if err != nil {
		panic(err)
	}
	byteValue, err := ioutil.ReadAll(jsonFile)
	if err != nil {
		panic(err)
	}
	var data [][]int
	if err = json.Unmarshal(byteValue, &data); err != nil {
		panic(err)
	}
	if err = jsonFile.Close(); err != nil {
		panic(err)
	}
	return data
}