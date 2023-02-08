# Fundamentals Notes
## Concepts
### Storage Units
- **Byte** - 8 bits
- **Kilo-** means 1,000; a Kilobyte is one thousand bytes.
- **Mega-** means 1,000,000; a Megabyte is a million bytes.
- **Giga-** means 1,000,000,000; a Gigabyte is a billion bytes.
- **Tera-** means 1,000,000,000,000; a Terabyte is a trillion bytes.
- **Kilobytes (KB)** - 1,000 bytes
- **Megabytes (MB)** - 1,000 Kilobytes
- **Gigabytes (GB)** - 1,000 Megabytes
- **Terabytes (TB)** - 1,000 Gigabytes
### Patent, Copyright, Trademark
- **Patent** - can protect some invention. For example, PC could be patented.
- **Copyright** - protects some intelectual property. For example, a software or a book about programming can be protected by copyright.
- **Trademark** - a logo of your website can be protected by a trademark.
## Infrastructure
### Cables
- **RJ-11** - telephone cable
- **RJ-45** - ethernet cable
### Connectors 
- **USB** - universal serial bus
- **Thunderbolt** - usually on Mac
- **Bluetooth** - self-descriptive
- **RF** - radio frequency connector (remote control for example)
- **Firewire** - usually for external hard drives
### Graphic device
- **VGA** - Video Graphics Array, D-shaped, really hard to not recognize, 15 pins numbered from right up corner to left down corner in 3 rows 
- **HDMI** - High-Definition Multimedia Interface, D-shaped, 19 pins in two rows, first row - odd numbers from 1 to 19 from right to left, second row even numbers from 2 to 18 right to left
- **DVI** - Digital Visual Interface, not very popular nowadays
### Other devices
- **PS/2** - Connector used for keyboard and mouse back in the day. Nowadays replaced by US
    - ***PS2 ports are still on motherboards because they offer better connectivity and lower latency.***
### Drivers
- **Driver** - a software component that lets the operating system and a device communicate with each other.
- **Device manager (menedżer urządzeń)** - a component of the Microsoft Windows operating system. It allows users to view and control the hardware attached to the computer.
### CPU:
- **CPU - Central Processing Unit**
- **CPU types:**
    - **ARM (Advanced RISC Machine)**
        - **Mobile Phone**
        - **Tablet**
    - **32 bit**
        - **Laptop**
        - **Workstation**
        - **Server**
    - **64 bit**
        - **Laptop**
        - **Workstation**
        - **Server**
- **32 bit processor can handle only up to 4GB of RAM**
- **For 64 bit processor, RAM limit is 16EB (exabytes)**
- **GPU - Graphics Processing Unit**
## OS (Operating System)
- **OS is an interface betweeen applications and hardware**
### OS tasks:
- **Disk management**
- **Process management and scheduling**
- **Memory management**
- **Device management**
- **Providing some kind of interface**
- **Access control and protection**
### OS types:
- **Mobile device OS**
    - **Android**
- **Workstation OS**
    - **Windows**
    - **Mac**
    - **Some Linux distro suited for workstations - Ubuntu for example**
- **Server OS**
    - **Windows Server**
    - **Linux distro suited for being a server**
    - **Unix**
- **Embedded OS**
    - **ATM machine for example**
- **Firmware OS**
    - **BIOS**
- **Hypervisor**
    - **VMWare**

## Filesystems

### Filesystems types:
- **NTFS**
    - **Windows only**
    - **Appeared with Windows XP**
    - **No file size limit**
    - **No partition size limit**
    - **Has features such as permissions or journaling**
- **FAT32**
    - **File Allocation Table**
    - **Windows/Mac/Linux/any other devices**
    - **Oldest**
    - **File size limit: 4GB**
    - **Partition size limit: 8TB**
    - **No permissions feature - not suited for new Windows**
- **exFAT**
    - **Mac compatibile**
    - **No file size limit**
    - **Since Windows Vista**
- **HFS**
    - **Mac**
- **Ext4**
    - **Linux**

### Filesystems Features:
- **Limitations**
- **Permissions**
- **Journaling**
- **Naming rules**
- **Compression**
- **Encryption**

## Mock Exams notes:
### Definitions:
- **IOPS (Input/Output operations per second) - measurement of a disk throughput**
- **GPS (Global Positioning System) - uses satelites for communication, from anywhere on the planet**
- **SaaS (Software as a Service) - centrally hosted (cloud-based), "on-demand software", web-based end user software**
- **SSD (Solid State Drive) - faster than any other technology at reading, only reading from RAM beats it**
- **IP is configured by:**
    - **DHCP (Dynamic Host Configuration Protocol)**
        - **DHCP - modern implementation of BOOTIP**
        - **DHCP Reservation - excludes IPs from being handed unless they meet a certain condition**
            - **Discover**
            - **Offer**
            - **Request**
            - **Acknowledge**
        - **IPv6 by DHCPv6 Protocol**
    - **Can be statically assigned**
    - **When no static IP and cannot reach DHCP Server:**
        - **APIPA - Automatic Private IP Addressing**
            - **As name suggests, handles private IPs, inside LAN, quick conf without DHCP**
        - **Zero Conf - Zero Configuration**
            - **Modern version of APIPA**
- **Compression - creating single file out of multiple files that occupies less space**
- **Wired connection - better in terms of security than technologies using signals that can be easily intercepted such as**
    - **Wireless**
    - **Celluar**
    - **Radio**
- **DNS (Domain Name System) - URL-to-IP translation**
- **non-persisten storage - in-memory storage**
- **SAN - Storage Area Network**
- **NAS - Network Attached Storage**
- **iSCSI - Internet Small Computer Systems Interface**
- **NFC - Near Field Communication**
- **SSID - Service Set Identifier**
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
- **MMC - Microsoft Management Console**
- **RAID - redundant array of independent disks**
- **Network backbones:**
    - **Serial**
    - **Hierarchical/Distributed**
    - **Collapsed**
- **Node - endpoint** 
- **RAID levels:**
    - **RAID 0 (striping) - 2 hdds (or more), 0 redundancy, you get speed in RAID 0**
    - **RAID 1 (mirroring) - 2 redundant hdds, less space and less speed since you write everything twice but more fault-tolerant**
    - **RAID 5 (striping with parity) - minimum 3 hdds, you can lose 1 drive before losing data**
    - **RAID 6 - minimum 4 hdds, you can lose up to 2 drives before losing data**
    - **RAID 10 (striping mirrors) - striping like in RAID 0 but not over 2 hdds but over 2 hdds + 2 mirrors (mirroring like in RAID 1)**
    - **RAID 0+1 - two striped pairs, first is mirrored by the second**
- **USB standards and their speeds:**

| Standard      | Maximum speed |
|---------------|---------------|
| USB 1.0       | 1.5 Mbps      |
| USB 1.1       | 12 Mbps       |
| USB 2.0       | 480 Mbps      |
| USB 3.0       | 5 Gbps        |
| USB 3.1 Gen 1 | 5 Gbps        |
| USB 3.1 Gen 2 | 10 Gbps       |

- **Recognizing ports for USB standards by color:**

| Standard          | Color             |
|-------------------|-------------------|
| USB 1.1           | White             |
| USB 2.0           | Black             |
| USB 3.0-3.1 Gen 1 | Blue              |
| USB 3.1           | Teal              |
| Charging Port     | Red/Orange/Yellow |

- **Charging port - USB port for charging. If desktop is turned off, its still charging.**
- **USBs are backward-compatible**
- **USB A connector - downstream connection**
- **USB B connector - upstream connection**
