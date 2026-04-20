const EXTENSIONS: Record<number, string> = {
  10001: "jpg",  10002: "jpeg", 10003: "jpeg", 10004: "jpg",  10005: "jpg",
  10006: "jpg",  10007: "jpeg", 10008: "jpeg", 10009: "jpeg", 10010: "jpeg",
  10011: "jpeg", 10012: "jpg",  10013: "jpg",  10014: "jpg",  10015: "jpg",
  10016: "jpg",  10017: "jpg",  10018: "jpg",  10019: "jpg",  10020: "jpg",
  10021: "jpg",  10022: "jpg",  10023: "jpg",  10024: "jpg",  10025: "jpg",
  10026: "jpg",  10027: "jpg",  10028: "jpg",  10029: "jpg",  10030: "jpg",
  10031: "jpg",  10032: "jpg",  10033: "jpg",  10034: "jpg",  10035: "jpg",
  10036: "jpg",  10037: "jpg",  10038: "jpg",  10039: "jpg",  10040: "jpeg",
  10041: "jpeg", 10042: "jpeg", 10043: "jpeg", 10044: "jpeg", 10045: "jpg",
  10046: "jpg",  10047: "jpg",  10048: "jpg",  10049: "jpg",  10050: "jpg",
  10051: "jpg",  10052: "jpg",  10053: "jpg",  10054: "jpg",  10055: "jpg",
  10056: "jpeg", 10057: "jpg",  10058: "jpg",  10059: "jpg",  10060: "jpg",
  10061: "jpg",  10062: "jpeg", 10063: "jpg",  10064: "jpg",  10065: "jpg",
  10066: "jpg",  10067: "jpeg", 10068: "jpeg", 10069: "jpeg", 10070: "jpg",
  10071: "jpg",  10072: "jpg",  10073: "jpg",  10074: "jpg",  10075: "jpg",
  10076: "jpg",  10077: "jpg",  10078: "jpg",  10079: "jpg",  10080: "jpg",
  10081: "jpg",  10082: "jpg",  10083: "jpg",
};

export function img(id: number): string {
  const ext = EXTENSIONS[id];
  if (!ext) throw new Error(`Unknown image id: ${id}`);
  return `/HLC_Hair_Store/${id}.${ext}`;
}

export function formatPrice(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}
