all: remove install build run

install:
	npm i
remove:
	rm -rf bin && rm -rf node_modules
build:
	yarn build:docs && yarn build:release
run:
	node index
link:
	./scripts/relink-pkg
