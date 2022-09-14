def greetings
  puts "hello"
  yield
  puts "Nice to meet you!"
end

def greetings2(&block)
  puts "hello"
  yield block
  puts "Nice to meet you!"
end

greetings { puts "Julian" }
greetings2 { puts "Julian" }
