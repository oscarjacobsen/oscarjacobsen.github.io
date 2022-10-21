#!/usr/bin/env python
import os


os.chdir(os.path.dirname(__file__))


def main():
    os.system("python -m http.server")


if __name__ == "__main__":
    main()
