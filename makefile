all: remove install build run

install:
	yarn

remove:
	rm -rf bin && rm -rf node_modules
build:
	yarn build:docs && yarn build:release
run:
	yarn node index
link:
	./scripts/relink-pkg

refresh:
	./scripts/refresh
