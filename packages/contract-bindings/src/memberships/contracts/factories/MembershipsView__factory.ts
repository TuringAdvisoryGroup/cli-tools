/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MembershipsView,
  MembershipsViewInterface,
} from "../MembershipsView";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "eternalStorage",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "scheduleId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getBuyPerWallet",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "record",
        type: "bytes32",
      },
    ],
    name: "getBuyWalletCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getCampaign",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "campaignId",
            type: "bytes32",
          },
          {
            internalType: "bytes32[]",
            name: "phases",
            type: "bytes32[]",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
        ],
        internalType: "struct MembershipsTypes.Campaign",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getCampaignByOwner",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "campaignId",
            type: "bytes32",
          },
          {
            internalType: "bytes32[]",
            name: "phases",
            type: "bytes32[]",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
        ],
        internalType: "struct MembershipsTypes.Campaign[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "referral",
        type: "address",
      },
    ],
    name: "getCampaignByReferral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "campaignId",
            type: "bytes32",
          },
          {
            internalType: "bytes32[]",
            name: "phases",
            type: "bytes32[]",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
        ],
        internalType: "struct MembershipsTypes.Campaign[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "schedule",
        type: "bytes32",
      },
    ],
    name: "getCampaignBySchedule",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "campaignId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "campaignIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "scheduleIndex",
            type: "uint256",
          },
        ],
        internalType: "struct MembershipsTypes.ScheduleCampaign",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "campaignId",
        type: "bytes32",
      },
    ],
    name: "getCampaignMetadata",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCampaignsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "scheduleID",
        type: "bytes32",
      },
      {
        internalType: "enum MembershipsTypes.UserType",
        name: "userType",
        type: "uint8",
      },
    ],
    name: "getClaimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "record",
        type: "bytes32",
      },
    ],
    name: "getReferral",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "referral",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "referralFee",
            type: "uint256",
          },
        ],
        internalType: "struct MembershipsTypes.ScheduleReferral",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "scheduleId",
        type: "bytes32",
      },
    ],
    name: "getSchedule",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revoked",
            type: "bool",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "amountTotal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "released",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "lotToken",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "lotSize",
            type: "uint256[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "enum MembershipsTypes.AssetType",
                name: "assetType",
                type: "uint8",
              },
            ],
            internalType: "struct MembershipsTypes.Asset",
            name: "paymentAsset",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "pricePerLot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rollFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxBuyPerWallet",
            type: "uint256",
          },
        ],
        internalType: "struct MembershipsTypes.MintingSchedule",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokensAllowed",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620027fa380380620027fa833981810160405281019062000037919062000095565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200011a565b6000815190506200008f8162000100565b92915050565b600060208284031215620000ae57620000ad620000fb565b5b6000620000be848285016200007e565b91505092915050565b6000620000d482620000db565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6200010b81620000c7565b81146200011757600080fd5b50565b6126d0806200012a6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063ac886f2611610071578063ac886f26146101d9578063c2f1ee9d14610209578063e3ba797a14610227578063efc427b714610258578063f3e2ec1614610288578063fb5474ae146102b9576100b4565b80633adc277a146100b95780633c639278146100e95780635598f8cc146101195780636797542714610149578063786dd9dd1461017957806382e58d51146101a9575b600080fd5b6100d360048036038101906100ce91906117a0565b6102d7565b6040516100e0919061211e565b60405180910390f35b61010360048036038101906100fe91906117cd565b610394565b6040516101109190612176565b60405180910390f35b610133600480360381019061012e91906119a8565b61044a565b60405161014091906120fc565b60405180910390f35b610163600480360381019061015e91906117a0565b610507565b60405161017091906120da565b60405180910390f35b610193600480360381019061018e91906117a0565b6105be565b6040516101a09190612140565b60405180910390f35b6101c360048036038101906101be91906117a0565b6106a0565b6040516101d0919061215b565b60405180910390f35b6101f360048036038101906101ee91906117a0565b610757565b6040516102009190612176565b60405180910390f35b61021161080a565b60405161021e919061204b565b60405180910390f35b610241600480360381019061023c919061172a565b6108b4565b60405161024f929190612191565b60405180910390f35b610272600480360381019061026d919061180d565b610bac565b60405161027f9190612176565b60405180910390f35b6102a2600480360381019061029d919061172a565b610c62565b6040516102b0929190612191565b60405180910390f35b6102c1610f5a565b6040516102ce9190612176565b60405180910390f35b6102df611000565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633adc277a836040518263ffffffff1660e01b8152600401610338919061206d565b60006040518083038186803b15801561035057600080fd5b505afa158015610364573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061038d9190611932565b9050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633c63927884846040518363ffffffff1660e01b81526004016103f2929190612088565b60206040518083038186803b15801561040a57600080fd5b505afa15801561041e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044291906119d5565b905092915050565b610452611092565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635598f8cc836040518263ffffffff1660e01b81526004016104ab9190612176565b60006040518083038186803b1580156104c357600080fd5b505afa1580156104d7573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061050091906118e9565b9050919050565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166367975427836040518263ffffffff1660e01b8152600401610562919061206d565b60006040518083038186803b15801561057a57600080fd5b505afa15801561058e573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906105b791906118a0565b9050919050565b6105c66110b6565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4e4f803866040518263ffffffff1660e01b8152600401610625919061206d565b60606040518083038186803b15801561063d57600080fd5b505afa158015610651573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610675919061184d565b9250925092506040518060600160405280848152602001838152602001828152509350505050919050565b6106a86110da565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382e58d51836040518263ffffffff1660e01b8152600401610701919061206d565b604080518083038186803b15801561071857600080fd5b505afa15801561072c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610750919061197b565b9050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ac886f26836040518263ffffffff1660e01b81526004016107b3919061206d565b60206040518083038186803b1580156107cb57600080fd5b505afa1580156107df573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080391906119d5565b9050919050565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c2f1ee9d6040518163ffffffff1660e01b815260040160006040518083038186803b15801561087257600080fd5b505afa158015610886573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906108af9190611757565b905090565b6000606060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b3b736a3856040518263ffffffff1660e01b81526004016109149190612007565b60206040518083038186803b15801561092c57600080fd5b505afa158015610940573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096491906119d5565b905060008167ffffffffffffffff81111561098257610981612593565b5b6040519080825280602002602001820160405280156109bb57816020015b6109a8611092565b8152602001906001900390816109a05790505b5090506000805b83811015610b9d5760008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338ff4d578a856040518363ffffffff1660e01b8152600401610a28929190612022565b604080518083038186803b158015610a3f57600080fd5b505afa158015610a53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a779190611a02565b9150915060026003811115610a8f57610a8e612535565b5b816003811115610aa257610aa1612535565b5b1415610b885760008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635598f8cc846040518263ffffffff1660e01b8152600401610b049190612176565b60006040518083038186803b158015610b1c57600080fd5b505afa158015610b30573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610b5991906118e9565b905080868680610b68906124bd565b975081518110610b7b57610b7a612564565b5b6020026020010181905250505b50508080610b95906124bd565b9150506109c2565b50808294509450505050915091565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663efc427b784846040518363ffffffff1660e01b8152600401610c0a9291906120b1565b60206040518083038186803b158015610c2257600080fd5b505afa158015610c36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5a91906119d5565b905092915050565b6000606060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b3b736a3856040518263ffffffff1660e01b8152600401610cc29190612007565b60206040518083038186803b158015610cda57600080fd5b505afa158015610cee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1291906119d5565b905060008167ffffffffffffffff811115610d3057610d2f612593565b5b604051908082528060200260200182016040528015610d6957816020015b610d56611092565b815260200190600190039081610d4e5790505b5090506000805b83811015610f4b5760008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338ff4d578a856040518363ffffffff1660e01b8152600401610dd6929190612022565b604080518083038186803b158015610ded57600080fd5b505afa158015610e01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e259190611a02565b9150915060006003811115610e3d57610e3c612535565b5b816003811115610e5057610e4f612535565b5b1415610f365760008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635598f8cc846040518263ffffffff1660e01b8152600401610eb29190612176565b60006040518083038186803b158015610eca57600080fd5b505afa158015610ede573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610f0791906118e9565b905080868680610f16906124bd565b975081518110610f2957610f28612564565b5b6020026020010181905250505b50508080610f43906124bd565b915050610d70565b50808294509450505050915091565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fb5474ae6040518163ffffffff1660e01b815260040160206040518083038186803b158015610fc357600080fd5b505afa158015610fd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffb91906119d5565b905090565b604051806101c00160405280600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600080191681526020016000815260200160008152602001606081526020016060815260200161107761110a565b81526020016000815260200160008152602001600081525090565b60405180606001604052806000801916815260200160608152602001606081525090565b60405180606001604052806000801916815260200160008152602001600081525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000600181111561114657611145612535565b5b81525090565b600061115f61115a846121e6565b6121c1565b90508083825260208201905082856020860282011115611182576111816125d1565b5b60005b858110156111b2578161119888826112f3565b845260208401935060208301925050600181019050611185565b5050509392505050565b60006111cf6111ca84612212565b6121c1565b905080838252602082019050828560208602820111156111f2576111f16125d1565b5b60005b85811015611222578161120888826113bc565b8452602084019350602083019250506001810190506111f5565b5050509392505050565b600061123f61123a8461223e565b6121c1565b90508083825260208201905082856020860282011115611262576112616125d1565b5b60005b8581101561129257816112788882611715565b845260208401935060208301925050600181019050611265565b5050509392505050565b60006112af6112aa8461226a565b6121c1565b9050828152602081018484840111156112cb576112ca6125d6565b5b6112d6848285612459565b509392505050565b6000813590506112ed8161261e565b92915050565b6000815190506113028161261e565b92915050565b600082601f83011261131d5761131c6125c2565b5b815161132d84826020860161114c565b91505092915050565b600082601f83011261134b5761134a6125c2565b5b815161135b8482602086016111bc565b91505092915050565b600082601f830112611379576113786125c2565b5b815161138984826020860161122c565b91505092915050565b6000815190506113a181612635565b92915050565b6000813590506113b68161264c565b92915050565b6000815190506113cb8161264c565b92915050565b6000815190506113e081612663565b92915050565b6000813590506113f581612673565b92915050565b60008151905061140a81612673565b92915050565b600082601f830112611425576114246125c2565b5b815161143584826020860161129c565b91505092915050565b600060408284031215611454576114536125c7565b5b61145e60406121c1565b9050600061146e848285016112f3565b6000830152506020611482848285016113d1565b60208301525092915050565b6000606082840312156114a4576114a36125c7565b5b6114ae60606121c1565b905060006114be848285016113bc565b600083015250602082015167ffffffffffffffff8111156114e2576114e16125cc565b5b6114ee84828501611336565b602083015250604082015167ffffffffffffffff811115611512576115116125cc565b5b61151e84828501611410565b60408301525092915050565b60006101e08284031215611541576115406125c7565b5b61154c6101c06121c1565b9050600061155c84828501611392565b600083015250602061157084828501611392565b6020830152506040611584848285016112f3565b604083015250606061159884828501611715565b60608301525060806115ac84828501611715565b60808301525060a06115c0848285016113bc565b60a08301525060c06115d484828501611715565b60c08301525060e06115e884828501611715565b60e08301525061010082015167ffffffffffffffff81111561160d5761160c6125cc565b5b61161984828501611308565b6101008301525061012082015167ffffffffffffffff81111561163f5761163e6125cc565b5b61164b84828501611364565b610120830152506101406116618482850161143e565b6101408301525061018061167784828501611715565b610160830152506101a061168d84828501611715565b610180830152506101c06116a384828501611715565b6101a08301525092915050565b6000604082840312156116c6576116c56125c7565b5b6116d060406121c1565b905060006116e0848285016112f3565b60008301525060206116f484828501611715565b60208301525092915050565b60008135905061170f81612683565b92915050565b60008151905061172481612683565b92915050565b6000602082840312156117405761173f6125e0565b5b600061174e848285016112de565b91505092915050565b60006020828403121561176d5761176c6125e0565b5b600082015167ffffffffffffffff81111561178b5761178a6125db565b5b61179784828501611308565b91505092915050565b6000602082840312156117b6576117b56125e0565b5b60006117c4848285016113a7565b91505092915050565b600080604083850312156117e4576117e36125e0565b5b60006117f2858286016113a7565b9250506020611803858286016112de565b9150509250929050565b60008060408385031215611824576118236125e0565b5b6000611832858286016113a7565b9250506020611843858286016113e6565b9150509250929050565b600080600060608486031215611866576118656125e0565b5b6000611874868287016113bc565b935050602061188586828701611715565b925050604061189686828701611715565b9150509250925092565b6000602082840312156118b6576118b56125e0565b5b600082015167ffffffffffffffff8111156118d4576118d36125db565b5b6118e084828501611410565b91505092915050565b6000602082840312156118ff576118fe6125e0565b5b600082015167ffffffffffffffff81111561191d5761191c6125db565b5b6119298482850161148e565b91505092915050565b600060208284031215611948576119476125e0565b5b600082015167ffffffffffffffff811115611966576119656125db565b5b6119728482850161152a565b91505092915050565b600060408284031215611991576119906125e0565b5b600061199f848285016116b0565b91505092915050565b6000602082840312156119be576119bd6125e0565b5b60006119cc84828501611700565b91505092915050565b6000602082840312156119eb576119ea6125e0565b5b60006119f984828501611715565b91505092915050565b60008060408385031215611a1957611a186125e0565b5b6000611a2785828601611715565b9250506020611a38858286016113fb565b9150509250929050565b6000611a4e8383611a9e565b60208301905092915050565b6000611a668383611cb8565b60208301905092915050565b6000611a7e8383611d95565b905092915050565b6000611a928383611fe9565b60208301905092915050565b611aa7816123bd565b82525050565b611ab6816123bd565b82525050565b6000611ac7826122db565b611ad18185612346565b9350611adc8361229b565b8060005b83811015611b0d578151611af48882611a42565b9750611aff83612312565b925050600181019050611ae0565b5085935050505092915050565b6000611b25826122db565b611b2f8185612357565b9350611b3a8361229b565b8060005b83811015611b6b578151611b528882611a42565b9750611b5d83612312565b925050600181019050611b3e565b5085935050505092915050565b6000611b83826122e6565b611b8d8185612368565b9350611b98836122ab565b8060005b83811015611bc9578151611bb08882611a5a565b9750611bbb8361231f565b925050600181019050611b9c565b5085935050505092915050565b6000611be1826122f1565b611beb8185612379565b935083602082028501611bfd856122bb565b8060005b85811015611c395784840389528151611c1a8582611a72565b9450611c258361232c565b925060208a01995050600181019050611c01565b50829750879550505050505092915050565b6000611c56826122fc565b611c60818561238a565b9350611c6b836122cb565b8060005b83811015611c9c578151611c838882611a86565b9750611c8e83612339565b925050600181019050611c6f565b5085935050505092915050565b611cb2816123cf565b82525050565b611cc1816123db565b82525050565b611cd0816123db565b82525050565b611cdf81612435565b82525050565b611cee81612447565b82525050565b6000611cff82612307565b611d09818561239b565b9350611d19818560208601612459565b611d22816125e5565b840191505092915050565b6000611d3882612307565b611d4281856123ac565b9350611d52818560208601612459565b611d5b816125e5565b840191505092915050565b604082016000820151611d7c6000850182611a9e565b506020820151611d8f6020850182611cd6565b50505050565b6000606083016000830151611dad6000860182611cb8565b5060208301518482036020860152611dc58282611b78565b91505060408301518482036040860152611ddf8282611cf4565b9150508091505092915050565b6000606083016000830151611e046000860182611cb8565b5060208301518482036020860152611e1c8282611b78565b91505060408301518482036040860152611e368282611cf4565b9150508091505092915050565b60006101e083016000830151611e5c6000860182611ca9565b506020830151611e6f6020860182611ca9565b506040830151611e826040860182611a9e565b506060830151611e956060860182611fe9565b506080830151611ea86080860182611fe9565b5060a0830151611ebb60a0860182611cb8565b5060c0830151611ece60c0860182611fe9565b5060e0830151611ee160e0860182611fe9565b50610100830151848203610100860152611efb8282611abc565b915050610120830151848203610120860152611f178282611c4b565b915050610140830151611f2e610140860182611d66565b50610160830151611f43610180860182611fe9565b50610180830151611f586101a0860182611fe9565b506101a0830151611f6d6101c0860182611fe9565b508091505092915050565b606082016000820151611f8e6000850182611cb8565b506020820151611fa16020850182611fe9565b506040820151611fb46040850182611fe9565b50505050565b604082016000820151611fd06000850182611a9e565b506020820151611fe36020850182611fe9565b50505050565b611ff28161242b565b82525050565b6120018161242b565b82525050565b600060208201905061201c6000830184611aad565b92915050565b60006040820190506120376000830185611aad565b6120446020830184611ff8565b9392505050565b600060208201905081810360008301526120658184611b1a565b905092915050565b60006020820190506120826000830184611cc7565b92915050565b600060408201905061209d6000830185611cc7565b6120aa6020830184611aad565b9392505050565b60006040820190506120c66000830185611cc7565b6120d36020830184611ce5565b9392505050565b600060208201905081810360008301526120f48184611d2d565b905092915050565b600060208201905081810360008301526121168184611dec565b905092915050565b600060208201905081810360008301526121388184611e43565b905092915050565b60006060820190506121556000830184611f78565b92915050565b60006040820190506121706000830184611fba565b92915050565b600060208201905061218b6000830184611ff8565b92915050565b60006040820190506121a66000830185611ff8565b81810360208301526121b88184611bd6565b90509392505050565b60006121cb6121dc565b90506121d7828261248c565b919050565b6000604051905090565b600067ffffffffffffffff82111561220157612200612593565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561222d5761222c612593565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561225957612258612593565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561228557612284612593565b5b61228e826125e5565b9050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006123c88261240b565b9050919050565b60008115159050919050565b6000819050919050565b60008190506123f3826125f6565b919050565b60008190506124068261260a565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612440826123e5565b9050919050565b6000612452826123f8565b9050919050565b60005b8381101561247757808201518184015260208101905061245c565b83811115612486576000848401525b50505050565b612495826125e5565b810181811067ffffffffffffffff821117156124b4576124b3612593565b5b80604052505050565b60006124c88261242b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156124fb576124fa612506565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6002811061260757612606612535565b5b50565b6004811061261b5761261a612535565b5b50565b612627816123bd565b811461263257600080fd5b50565b61263e816123cf565b811461264957600080fd5b50565b612655816123db565b811461266057600080fd5b50565b6002811061267057600080fd5b50565b6004811061268057600080fd5b50565b61268c8161242b565b811461269757600080fd5b5056fea26469706673582212205c1a42bfcb24b00d71708eabd7b3397d77f11c1c5189b81ab106dbc0b7c12fa964736f6c63430008070033";

type MembershipsViewConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MembershipsViewConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MembershipsView__factory extends ContractFactory {
  constructor(...args: MembershipsViewConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    eternalStorage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MembershipsView> {
    return super.deploy(
      eternalStorage,
      overrides || {}
    ) as Promise<MembershipsView>;
  }
  override getDeployTransaction(
    eternalStorage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(eternalStorage, overrides || {});
  }
  override attach(address: string): MembershipsView {
    return super.attach(address) as MembershipsView;
  }
  override connect(signer: Signer): MembershipsView__factory {
    return super.connect(signer) as MembershipsView__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MembershipsViewInterface {
    return new utils.Interface(_abi) as MembershipsViewInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MembershipsView {
    return new Contract(address, _abi, signerOrProvider) as MembershipsView;
  }
}
