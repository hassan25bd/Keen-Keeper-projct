@echo off
echo 🚀 Setting up KeenKeeper...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18 or higher.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node -v
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

echo.
echo ✅ Installation complete!
echo.
echo 🎯 Next steps:
echo 1. Run: npm run dev
echo 2. Open: http://localhost:3000
echo.
echo Happy friend keeping! 👥
echo.
pause
