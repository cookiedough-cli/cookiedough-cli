all: remove build run

remove:
	rm -rf bin && rm -rf reference
build:
	yarn build:docs && yarn build:release
run:
	node bin
