@echo off
REM FOENIX Windows Launcher
REM Starts the interactive dashboard menu in PowerShell

title FOENIX - Windows Launcher
cd /d "%~dp0.."

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0launch.ps1"

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Server process terminated.
    pause
)
