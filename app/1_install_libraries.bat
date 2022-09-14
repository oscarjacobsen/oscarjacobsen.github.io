@echo off
call npm init .
call npm install --legacy-peer-deps rete
call npm install --legacy-peer-deps rete-connection-plugin
call npm install --legacy-peer-deps rete-vue-render-plugin
call npm install --legacy-peer-deps rete-context-menu-plugin
call npm install --legacy-peer-deps web-ifc-three
call npm install --legacy-peer-deps three
call npm install --legacy-peer-deps rollup --save-dev
call npm install --legacy-peer-deps @rollup/plugin-node-resolve --save-dev
