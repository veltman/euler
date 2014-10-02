sum = 0

# More efficient

for i in (3...1000).step(3)
	sum += i
end

for i in (5...1000).step(5)
	if i % 3 > 0
		sum += i
	end
end

puts sum