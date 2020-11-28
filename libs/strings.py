"""
libs.strings

Se a linguagem mudar, defenir a variavel 'libs.strings.default_locale' e correr 'libs.strings.refresh()'
"""

import json

default_locale = "pt-pt"
cached_strings = {}


def refresh():
    global cached_strings
    with open(f"strings/{default_locale}.json") as f:
        cached_strings = json.load(f)


def gettext(name):
    return cached_strings[name]


refresh()
