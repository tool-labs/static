# -*- coding: utf-8 -*-

import static_browser.parser

parser = static_browser.parser.PackageParser('res')
if not parser.validate():
    exit(1)
