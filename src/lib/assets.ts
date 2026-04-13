const EXTENSIONS: Record<number, string> = {
  10001: "jpg", 10002: "jpg", 10003: "jpg", 10004: "jpg", 10005: "jpeg",
  10006: "jpg", 10007: "jpg", 10008: "jpg", 10009: "jpg", 10010: "jpeg",
  10011: "jpg", 10012: "jpg", 10013: "jpg", 10014: "svg", 10015: "jpg",
  10016: "svg", 10017: "jpg", 10018: "svg", 10019: "jpg", 10020: "svg",
  10021: "jpg", 10022: "svg", 10023: "webp", 10024: "webp", 10025: "webp",
  10026: "webp", 10027: "webp", 10028: "webp", 10029: "webp", 10030: "webp",
  10031: "svg", 10032: "svg", 10033: "svg", 10034: "svg", 10035: "svg",
  10036: "svg", 10037: "webp", 10038: "webp", 10039: "webp", 10040: "webp",
  10041: "webp", 10042: "webp", 10043: "webp", 10044: "webp", 10045: "webp",
  10046: "svg", 10047: "svg", 10048: "svg", 10049: "svg", 10050: "webp",
  10051: "svg", 10052: "webp", 10053: "webp", 10054: "webp", 10055: "webp",
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
