# Capa Extra

Mod do [MineClaude](https://mineclaude.com). Id `capa_extra`, versão `0.1.0`. Repositório privado.

## O que ele faz

Uma capa nova no fim da lista (Capa do Veio) e a marca que a destrava: cavar fundo, sozinho, sem vencer ninguém.

## Instalar

Baixe o `.mcmod` da [última Release](../../releases/latest) e escolha um caminho:

- **Pasta de mods:** ponha o arquivo **`capa_extra.mcmod`** (o nome importa: o servidor exige que seja o id do mod) na `MODS_DIR` do servidor e reinicie. A Release traz esse nome pronto, ao lado da cópia com a versão no nome.
- **No jogo:** `/mod previa <link do .mcmod>`, ou a tela **Mods**.

Lado: servidor + navegador.

## Montar e empacotar aqui

Só precisa do [Bun](https://bun.sh) — nada do repositório do jogo:

```
bun tools/pack.mjs
```

Sai um `capa_extra-0.1.0.mcmod` determinístico (mesma entrada, mesmos bytes).

## Publicar uma versão

Suba a `version` no `package.json`, comite, e marque:

```
git tag v0.1.0 && git push origin v0.1.0
```

O workflow `.github/workflows/release.yml` monta, empacota e cria a Release com o `.mcmod` anexado.

## Arte

Arte 100% original, pintada por código.
