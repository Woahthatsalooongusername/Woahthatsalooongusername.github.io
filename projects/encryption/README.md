
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:5
My Partner's Key:5

Our initial shared key:11

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| st              | hi              | 11  |
|hvwg wg 1 hsgh   | this is 1 test  |  14 |
|qefp fp x 2ka lkb | this is a 2nd one  |  23 |
| ammj rfgq umpiq | cool this works |  24 |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:10bhjY

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

1 = 00000001
0 = 00000000
b = 01100010
h = 01101000
j = 01101010
Y = 01011001

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Cristian]
    Destination: [Joshua]  
    Sequence: 1/3
    Data: [00000001] [00000000]
    =========
    Packet 2:

    Source: [Cristian]
    Destination: [Joshua]
    Sequence: 2/3 
    Data: [01100010] [01101000]
    =========
    Packet 3:

    Source: [Cristian]
    Destination: [Joshua]
    Sequence: 3/3
    Data: [0110101] [01011001]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
symmetric encryption is easier to decrypt because it only uses one key. asymetric encryption uses multiple keys, making it slower but more secure.

- Why is it important that this protocol uses a new key for each message?
it adds an extra layer of security

- Why is it important that you never share your secret key?
someone could decrypt all the information you send online. this could include your credit card number

- In the transport layer, do these messages use TCP or UDP? Why?
These messages use TCP because they are secure but slow

- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
in the internet layer, packets get routed to their destination. The link layer is responsible for encoding and decoding packets

- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?
they can see who you sent the message to and when you sent it, 

