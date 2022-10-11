echo 'Enter Project Name:'
read NEW_PROJECT_NAME

echo "ProjectName=$NEW_PROJECT_NAME"

# doing the replacement
sed -i "s/template-utils-typescript-webpack/$NEW_PROJECT_NAME/" package.json
echo "# $NEW_PROJECT_NAME" > README.md

# clean up the sh file
rm setup.sh testLib.js
