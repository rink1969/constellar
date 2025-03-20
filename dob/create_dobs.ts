import { ccc } from "@ckb-ccc/ccc";
import { client, signer } from "@ckb-ccc/playground";

function getExplorerTxUrl(txHash: string) {
    const isMainnet = client.addressPrefix === 'ckb';
    const baseUrl = isMainnet ? 'https://explorer.nervos.org' : 'https://testnet.explorer.nervos.org';
  
    return `${baseUrl}/transaction/${txHash}`
}

/**
 * create spore
 */

const imageBaseUrl = "https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets";

const clusterIds: string[] = ["0xa", "0xb", "0xc"];

const dobs = [
    /* dobs in cluster0 */
    [
        `{"name":"Nan Tang","resource":{"url":"${imageBaseUrl}/god0/xxx.png","type":"image/png"}}`,
        `{"name":"Nan Tang","resource":{"url":"${imageBaseUrl}/god1/xxx.png","type":"image/png"}}`,
        `{"name":"Nan Tang","resource":{"url":"${imageBaseUrl}/god2/xxx.png","type":"image/png"}}`,
    ],
    [],
    []
];

for (let i = 0; i < clusterIds.length; i++) {
    for (let j = 0; j < dobs[i].length; j++) {
        const { tx: sporeTx, id: sporeId } = await ccc.spore.createSpore({
            signer,
            data: {
                contentType: 'application/json',
                content: ccc.bytesFrom(dobs[i][j], "utf8"),
                clusterId: clusterIds[i],
            },
            clusterMode: "clusterCell",
        });
        await sporeTx.completeFeeBy(signer, 2000n);
        const sporeTxHash = await signer.sendTransaction(sporeTx);
        console.log("Mint DOB tx sent:", sporeTxHash, `Spore ID: ${sporeId}`);
        await signer.client.waitTransaction(sporeTxHash);
        console.log("Mint DOB tx committed:", getExplorerTxUrl(sporeTxHash), `Spore ID: ${sporeId}`);
    }
}
