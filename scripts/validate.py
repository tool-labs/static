# -*- coding: utf-8 -*-

import logging
logging.basicConfig(level=logging.INFO)

import static_browser.parser

parser = static_browser.parser.NewPackageParser('res')
if not parser.validate():
    exit(1)
