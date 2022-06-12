local mongo = require "resty-mongol"
local cjson = require "cjson"

if(ngx) then
    ngx.req.read_body()
    print = ngx.say
    body = ngx.req.get_body_data()
    body = cjson.decode(body)
else
    body = {}
end

local conn = mongo()
conn:set_timeout(5000)
local ok, err = conn:connect()
if not ok then
    ngx.say("Connection failed: "..err)
end

local db = conn:new_db_handle("testdb")
local col_test = db:get_col("test")

local get_col = col_test:find({})

print(cjson.encode(get_col))