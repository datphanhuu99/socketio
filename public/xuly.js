var socket = io("http://localhost:3000")

$(document).ready(function()
{
	$("#btnModeRain").click(function()
	{
		socket.emit("CLIENT-SEND-MODE-RAIN")
	})
	$("#btnModeLove").click(function()
	{
		socket.emit("CLIENT-SEND-MODE-LOVE")
	})
	$("#btnModePlan").click(function()
	{
		socket.emit("CLIENT-SEND-MODE-PLAN")
	})
	$("#btnModeDomino").click(function()
	{
		socket.emit("CLIENT-SEND-MODE-DOMINO")
	})
	$("#btnOff").click(function()
	{
		socket.emit("CLIENT-SEND-MODE-OFF")
	})
	$("#mhx").click(function()
	{
		socket.emit("CLIENT-SEND-MODE-LAMP")
	})


})

socket.on("SERVER-SEND-RAIN-MODE", function(data)
{
	//alert("Đã chọn hiệu ứng mưa")
	$("#boxMode").html("")
	$("#boxMode").html(data.MODE)
})
socket.on("SERVER-SEND-LOVE-MODE", function(data)
{
	//alert("Đã chọn hiệu ứng love")
	$("#boxMode").html("")
	$("#boxMode").html(data.MODE)
})
socket.on("SERVER-SEND-PLAN-MODE", function(data)
{
	//alert("Đã chọn hiệu ứng plan")
	$("#boxMode").html("")
	$("#boxMode").html(data.MODE)
})

socket.on("SERVER-SEND-DOMINO-MODE", function(data)
{
	//alert("Đã chọn hiệu ứng domino")
	$("#boxMode").html("")
	$("#boxMode").html(data.MODE)
})
socket.on("SERVER-SEND-OFF-MODE", function(data)
{
	//alert("Đã tắt tất cả cả đèn")
	$("#boxMode").html("")
	$("#boxMode").html(data.MODE)
})

socket.on("SERVER-SEND-LAMP-MODE", function(data)
{
	//alert("Đã chọn hiệu ứng đèn ngủ")
	$("#boxMode").html("")
	$("#boxMode").html(data.MODE)
})


