export default interface ICacheProvider {
  save(key: string, value: any): Promise<void>;
  recover<T>(key: string): Promise<T | null>;
  invalidate(key: string): Promise<void>;
  invalidatePrefix(prefix: string): Promise<void>;
}

// Monitorar queries no banco para avaliar quantas vezes está sendo executada
// Ferramenta: datadog
