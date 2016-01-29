package main

import "net/http"

type Channel struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

func main() {
	router := NewRouter()

	http.Handle("/", router)
	http.ListenAndServe(":4000", nil)
}
