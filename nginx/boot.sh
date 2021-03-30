#!/usr/bin/env bash

if [[ -e ./nginx.conf ]]; then
	rm ./nginx.conf
fi

envsubst '${LH}' < nginx.template.conf > nginx.conf

chmod 777 nginx.conf
