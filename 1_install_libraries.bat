@echo off
call npm init .

REM 
call npm install --legacy-peer-deps rollup --save-dev
call npm install --legacy-peer-deps @rollup/plugin-node-resolve --save-dev

REM ifcjs and three
call npm install --legacy-peer-deps web-ifc-three
call npm install --legacy-peer-deps three


REM trimble-connect-addon
call npm install --save trimble-connect-project-workspace-api
call npm install --save trimble-connect-sdk 
