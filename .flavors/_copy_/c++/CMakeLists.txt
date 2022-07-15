cmake_minimum_required(VERSION 3.10)

project(COOKIEDOUGH VERSION 1.0)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED True)
add_subdirectory(lib)
add_executable(COOKIEDOUGH)
target_sources(COOKIEDOUGH PRIVATE
    lib/main.hpp
	lib/main.cpp
)
configure_file(lib.in.h lib.h)
