## Network Notes

### Definitions
- **LAN** - Local Area Network (no router)
- **WAN** - Wide Area Network (multiple LANs)
- **MAN** - Metropolitan Area Network (for example company has offices in 2 parts of one city)
- **CAN** - Campus Area Network
- **PAN** - Personal Area Network (bluetooth, multiple devices not knowing about each other)
- **WLAN** - Wireless LAN
- **SAN** - Storage Area Network
- **SoHo** - Small Office, Home Office
- **PoE** - Power over Ethernet
- **NFC** - Near field communication - 1.5 in (4 cm)
- #### IP basics
    - **Private IP** - Your IP inside your network
    - **Subnet Mask** - Tells you which part of your IP is network part and host part
    - **Default gateway** - Tells you if devices are inside your network or not
    - **Public IP** - Your IP visible when you connect to the internet
- **Networking:**
    - **Conncetion of computers in order to share resources**
    - **Each machine on the network usually called a node**
- **Packet:**
    - **A set size of data that is transferred over a physical medium to another node on a network**
    - **Usually TCP/IP or UDP**
- **Network medium:**
    - **Unshielded twisted pair**
    - **Shielded twisted pair**
    - **Coaxial cable**
    - **Fiber cable**
- **Network topologies:**
    - **Bus**
    - **Ring**
    - **Star**
    - **Mesh**
    - **Hybrid**
- **OSI MODEL:**
    7. **Application Layer:** <br>
        - **Closest to end user** <br>
        - **High level API handled here** <br>
        - **Resourse sharing** <br>
    6. **Presentation Layer:** <br>
        - **Encryption/decryption** <br>
        - **Encoding** <br>
        - **Data compression** <br>
    5. **Session Layer:** <br>
        - **Managing sessions: which should be kept active and which should be stopped** <br>
        - **TCP/IP, TLS, SSL** <br>
    4. **Transport Layer:** <br>
        - **Segmentation of data** <br>
        - **Transport** <br>
    3. **Network Layer:** <br>
        - **IP Address** <br>
        - **Routing** <br>
        - **Packets** <br>
    2. **Data Link Layer:** <br>
        - **Handles data frames** <br>
        - **Handles errors** <br>
        - **Determine protocol to be used** <br>
    \1. **Physical Layer**
- **TCP/IP uses client/server communication model**
- **Every TPC packet must be aknowledged**
- **TTL - Time To Live**
- **TCP/IP uses 3-way handshake**
    - **SYN ->>>**
    - **<<<-SYN/ACK**
    - **ACK->>>**
- **MAC - Media Access Control:**
    - **can be spoofed like IP**
    - **doesn not change even though IP does**
    - **address commonly identified by physical hardware**
- **UDP - User Datagram Protocol:**
    - **opposite of TCP**
    - **no 3 way handshake**
    - **doesnt care about the packet loss**
    - **not ordered nor sequenced**
- **Switch - device that takes in packets and redirects them to their next hop**
- **Router - routes data packets to their correct destination**

| Layer          | Data name |
|----------------|-----------|
| L4 (Transport) | Segment   |
| L3 (Network)   | Packet    |
| L2 (Data Link) | Fragment  |

- **Hub - brodcasts to everyone, not used nowadays**
- **Switch - used for LANs**
- **Router - used for accessing internet**
- **WAP - Wireless Access Point**
- **ICMP - Internet Control Message Protocol**
- **IDS - Intrusion Detection System**
- **IPS - Intrusion Prevention System**
- **Mesh network topology - redundant and expensive but reliable**
- **DMZ - Demilitarized Zone, often called Perimeter Network**
- **Star network topology - central point is its single point of failure**
- **UTP - Unishielded Twisted Pair**
- **STP - Shielded Twisted Pair**
- **Network backbones:**
    - **Serial**
    - **Hierarchical/Distributed**
    - **Collapsed**
- **Node - endpoint** 
### Cables
- **RJ-11** - telephone cable
- **RJ-45** - ethernet cable
