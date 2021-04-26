.PHONY:
.SILENT:

build:
	go build ./service/cmd/main.go

run:
	docker-compose up --build

test:
	go test -v ./...