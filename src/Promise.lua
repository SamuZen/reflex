local ReplicatedStorage = game:GetService("ReplicatedStorage")

local packages = script:FindFirstAncestor("rbxts_include")
	or script:FindFirstAncestor("include")
	or ReplicatedStorage:FindFirstChild("rbxts_include")
	or script.Parent.Parent.Packages

if packages and packages:FindFirstChild("promise") then
	return require(packages.promise)
else
	error(`Could not find Promise from {script:GetFullName()}`)
end
