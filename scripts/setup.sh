#!/bin/bash

# Dial Rishikesh - Project Setup Script

echo "🚀 Starting Dial Rishikesh Setup..."

# Ensure we are in the project root
cd "$(dirname "$0")/.."

# Check for .env file
if [ ! -f .env ]; then
    echo "⚠️ .env file not found. Copying from .env.example..."
    cp .env.example .env
    echo "✅ Created .env. Please update it with your Supabase credentials."
fi

# Install Backend dependencies (if any)
# echo "📦 Installing Backend dependencies..."
# npm install

# Install Frontend dependencies
echo "📦 Installing Frontend dependencies..."
cd src/frontend/web
npm install

echo "✨ Setup complete! To start the development server:"
echo "cd src/frontend/web && npm run dev"
