#!/bin/bash

echo "🚀 Setting up KeenKeeper..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Installation complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Run: npm run dev"
echo "2. Open: http://localhost:3000"
echo ""
echo "Happy friend keeping! 👥"
