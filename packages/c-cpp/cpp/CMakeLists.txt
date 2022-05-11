cmake_minimum_required(VERSION 3.10)

configure_file(my_library.h.in my_library.h)
# set the project name
project(my_library VERSION 1.0)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED True)
# add the executable
add_executable(my_library)
target_sources(my_library PRIVATE
    lib/main.cpp
)
target_include_directories(my_library PUBLIC
                            "${PROJECT_BINARY_DIR}")