@if (@CodeSection == @Batch) @then
@echo off
set SendKeys=CScript //nologo //E:JScript "%~F0"
Set oShell = CreateObject("WScript.Shell")

set timeout=20
set timeout1=10
set url="https://launchpad.classlink.com/svsd410"


start chrome " " %url% 
timeout %timeout1%
%SendKeys% "^{TAB}"
timeout %timeout1%
%SendKeys% "{TAB}"
%SendKeys% "{ENTER}"
timeout %timeout1%
%SendKeys% "{ENTER}"

set url="https://accounts.google.com/"
start chrome " " %url% 
timeout %timeout1%
%SendKeys% "{ENTER}"
timeout %timeout1%
%SendKeys% "{TAB}"
%SendKeys% "{ENTER}"

timeout 10
%SendKeys% "^{w}"
timeout 1
%SendKeys% "^{TAB}"
timeout 1
%SendKeys% "^{w}"
%SendKeys% "^{TAB}"

TASKKILL /PID cmd.exe
TASKKILL /PID ScreenShare.exe

pause
goto :EOF
@end
// JScript section
var WshShell = WScript.CreateObject("WScript.Shell");
WshShell.SendKeys(WScript.Arguments(0));

