$Bin="bin"
$Ref="reference"
if (Test-Path $Bin) {
	ECHO Y | Remove-Item $Bin
}
if (Test-Path $Ref) {
	ECHO Y | Remove-Item $Ref
}

yarn build:docs
yarn build:release
