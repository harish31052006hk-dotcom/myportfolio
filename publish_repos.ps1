$ErrorActionPreference = "Stop"

$github_username = "harish31052006hk-dotcom"
$base_dir = "C:\Users\USER\.gemini\antigravity-ide\brain\eeeb815b-bd04-4b3b-867b-04c932006116\scratch"
$repos = @(
    "ESP32-Web-Server-HTML-LED-Control",
    "ESP32-AdafruitIO-MQTT-Cloud-Control",
    "IFTTT-AdafruitIO-Voice-IoT-Automation",
    "Firebase-IoT-Monitoring-Dashboard",
    "Firebase-IoT-Environment-Monitor"
)

Write-Host "Checking GitHub authentication..."
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "You are not authenticated with GitHub CLI. Please run 'gh auth login' first." -ForegroundColor Red
    exit
}

foreach ($repo in $repos) {
    Write-Host "----------------------------------------"
    Write-Host "Publishing $repo..." -ForegroundColor Cyan
    Set-Location -Path "$base_dir\$repo"
    
    if (-not (Test-Path ".git")) {
        git init
    }
    
    git add .
    
    # Check if there are changes to commit
    $status = git status --porcelain
    if ($status) {
        git commit -m "Initial commit: ProtoSem Week 7 Task"
    }
    
    git branch -M main
    
    # Create the repository on GitHub and push
    Write-Host "Creating GitHub repository and pushing..."
    gh repo create "$github_username/$repo" --public --source=. --remote=origin --push
    
    Write-Host "Finished publishing $repo.`n" -ForegroundColor Green
}

Write-Host "All 5 repositories have been published successfully!" -ForegroundColor Green
