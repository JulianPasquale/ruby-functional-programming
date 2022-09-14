greetings = proc do |who|
  puts "hello"
  who.call
  puts "Nice to meet you!"
end

me = -> { puts "Julian" }

greetings.call(me)

