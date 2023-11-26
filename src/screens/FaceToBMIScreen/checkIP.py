import socket

def get_ip_address():
    try:
        # This creates a socket object
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        # No need to connect, just use the socket to get the IP address
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception as e:
        print(f"Could not get the IP address: {e}")

# Use the function to get the IP
my_ip = get_ip_address()
print(f"My IP address: {my_ip}")