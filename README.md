# microbit-embedded-systems
A little fun project with microbits from my module on embedded systems 

## Challenge 1: You don’t know our pain.

The challenge was relatively simple. The scenario was that we were helping to setup an alert system for elderly folks. If they were not moving, or pressed the help button, there would be a signal sent to the gateway. 

![flow diagram](https://i.ibb.co/ZMCmZfk/Screenshot-2020-10-17-at-1-55-56-AM.png)

(not shown in diagram: motion sensor to detect if elderly was still moving)

## Challenge 2:  I don’t stop when I’m tired, I stop when I’m done

The challenge seemed deceptively simple: Create a motion sensor using microbits.

To my dismay, Google told me that there is no inherent mechanism to detect motion in microbits.

However, after much innovation (and guess work), we realised that microbits had the ability to transmit and receive radio signals, which allowed for interesting possibilities.

Using one microbit (A) as a gateway, and the other microbits (B) as receivers, we constructed a motion sensor using the following 3 steps:
1. Gateway A sends radio signal to all receivers B's.
2. Receiver B sends radio signal back to Gateway A.
3. Gateway A calculates the difference in signal strength on receipt.
  </br> a. If difference exceeds a threshold, this is likely due to signal interference due to motion.
  </br> b. If difference is minimal, this means there is no signal interference, hence unlikely to have motion.

## How it works

The strength of radio signal is, from -128dBm to -42dBm. (-128 means a weak signal and -42 means a strong one.)

Based on trial and error, we saw that an absolute difference of  approximately 2dBm occurs when there is someone moving in between, due to interference.

