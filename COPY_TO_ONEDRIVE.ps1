# Run in PowerShell:  Set-ExecutionPolicy -Scope Process Bypass; .\COPY_TO_ONEDRIVE.ps1
$ErrorActionPreference = "Stop"

$dest = "C:\Users\RAKSHIT RAJPURA\OneDrive\Desktop\Rushabh Work\ONLINE WORK\aashirwad_industrial_engineer"
$src = $PSScriptRoot

Write-Host "Copying from:`n  $src`nto:`n  $dest`n"

New-Item -ItemType Directory -Force -Path $dest | Out-Null

# /E = all subdirs including empty; exclude heavy regenerable dirs (remove /XD line if you want those too)
robocopy $src $dest /E /XD node_modules .next .git /R:2 /W:2

# robocopy exit codes 0-7 = success
if ($LASTEXITCODE -ge 8) {
  Write-Error "robocopy failed with exit code $LASTEXITCODE"
  exit $LASTEXITCODE
}

Write-Host "`nDone. Open: $dest"
Write-Host "Then run: npm install && npm run dev"
