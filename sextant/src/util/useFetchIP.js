import { useState, useEffect } from 'react';

export default function useFetchIP() {
  const [ipv6Address, setIpv6Address] = useState('');
  const [ipv4Address, setIpv4Address] = useState('');
  const [msgColor, setMsgColor] = useState('green');

  async function fetchIPAddress(ipVersion) {
    try {
      const response = await fetch(`https://api${ipVersion}.ipify.org/?format=json`);
      const data = await response.json();
      setMsgColor('lime');
      return data.ip;
    } catch (error) {
      setMsgColor('red');
      return error.message;
    }
  }

  useEffect(() => {
    async function fetchIPs() {
      const [ipv6, ipv4] = await Promise.all([
        fetchIPAddress('64'),
        fetchIPAddress(''),
      ]);
      setIpv6Address(ipv6);
      setIpv4Address(ipv4);
    }
    fetchIPs();
  }, []);

  return [ipv6Address, ipv4Address, msgColor];
}