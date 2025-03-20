import { ccc } from "@ckb-ccc/ccc";
import { client, signer } from "@ckb-ccc/playground";

function getExplorerTxUrl(txHash: string) {
    const isMainnet = client.addressPrefix === 'ckb';
    const baseUrl = isMainnet ? 'https://explorer.nervos.org' : 'https://testnet.explorer.nervos.org';
  
    return `${baseUrl}/transaction/${txHash}`
}

const clusterNames = ["god0", "god1", "god2"];
const clusterDescriptions = ["god0 of nantang DAO.", "god1 of nantang DAO.", "god2 of nantang DAO."];
const clusterIds: string[] = [];
  
for (const clusterName of clusterNames) {
    console.log(`Creating cluster ${clusterName}...`);
    const { tx: clusterTx, id: clusterId } = await ccc.spore.createSporeCluster({
        signer,
        data: {
            name: clusterName,
            description: clusterDescriptions[clusterNames.indexOf(clusterName)],
        },
    });
            
    await clusterTx.completeFeeBy(signer, 2000n);
    const clusterTxHash = await signer.sendTransaction(clusterTx);
    console.log("Create cluster tx sent:", clusterTxHash, `Cluster ID: ${clusterId}`);
    await signer.client.waitTransaction(clusterTxHash);
    console.log("Create cluster tx committed:", getExplorerTxUrl(clusterTxHash), `Cluster ID: ${clusterId}`);
    clusterIds.push(clusterId);
}

console.log("Cluster IDs:", clusterIds);
