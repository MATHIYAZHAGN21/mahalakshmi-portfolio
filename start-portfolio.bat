@echo off
title Mahalakshmi Portfolio
cd /d "%~dp0"
start http://localhost:5173
npm.cmd run dev -- --host 0.0.0.0
