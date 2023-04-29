@echo off
call npm init .
call npm install --legacy-peer-deps web-ifc-three
call npm install --legacy-peer-deps three
call npm install --legacy-peer-deps rollup --save-dev
call npm install --legacy-peer-deps @rollup/plugin-node-resolve --save-dev
call npm install --save trimble-connect-project-workspace-api