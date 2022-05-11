cmake_minimum_required(VERSION 3.10)

# set the project name
project(MyLib VERSION 1.0)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED True)
# add the executable
add_executable(lib)
target_sources(MyLib PRIVATE
    lib/main.cpp
)