#!/bin/bash
# Test to ensure personal email is not in the repository

cd "$(dirname "$0")/.."

echo "Checking for personal email addresses..."

# Search for email patterns
if grep -rni "sean\.gayle@microsoft\.com\|segayle@" --include="*.md" --include="*.html" --include="*.js" --include="*.yml" --include="*.txt" . 2>/dev/null; then
    echo "❌ FAIL: Personal email found in repository!"
    exit 1
else
    echo "✅ PASS: No personal email found in repository"
    exit 0
fi
