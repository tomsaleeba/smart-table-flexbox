#!/bin/bash
cd `dirname $0`
PORT=8080
python -m SimpleHTTPServer $PORT
