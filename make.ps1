$Bin="bin"
$Ref="reference"
if (Test-Path $Bin) {
	Remove-Item $Bin
}
if (Test-Path $Ref) {
	Remove-Item $Ref
}

yarn build:docs
yarn build:release
