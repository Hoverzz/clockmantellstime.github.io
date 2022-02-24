@if (@CodeSection == @Batch) @then
@echo off
set SendKeys=CScript //nologo //E:JScript "%~F0"
Set oShell = CreateObject("WScript.Shell")

set timeout=20
set timeout1=10
set url="https://launchpad.classlink.com/svsd410"


start chrome " " %url% 
timeout %timeout%
%SendKeys% "^{TAB}"
timeout %timeout1%
%SendKeys% "{TAB}"
%SendKeys% "{ENTER}"
timeout %timeout1%
%SendKeys% "{ENTER}"

set url="https://accounts.google.com/"
start chrome " " %url% 
timeout %timeout%
%SendKeys% "{ENTER}"
timeout %timeout%
%SendKeys% "{TAB}"
%SendKeys% "{ENTER}"


pause
goto :EOF
@end
// JScript section
var WshShell = WScript.CreateObject("WScript.Shell");
WshShell.SendKeys(WScript.Arguments(0));

